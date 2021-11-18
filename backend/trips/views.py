from django.http import HttpResponse, Http404, JsonResponse
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.views import generic
from django.views.decorators.csrf import csrf_exempt
import user
from user.models import Profile
import json
from .forms import CarTripCreationForm
from .models import CarTrip
from .forms import CarTripCreationForm , RelationCreationForm , AddNameForm
from .models import CarTrip, Relation
import ast

# class IndexView(generic.ListView):
#     template_name = 'trips/index.html'
#     context_object_name = 'latest_cartrip_list'
#
#     def get_queryset(self):
#         print('hi')
#         return CarTrip.objects.order_by('-pub_date')
#

class DetailView(generic.DetailView):
    model = CarTrip
    template_name = 'trips/detail.html'

@csrf_exempt
def create(request):
    if request.method == 'POST':
        '''
        trip = CarTrip.create(driver_name=request.POST.get('driver_name'),
                              destination=request.POST.get('destination'),
                              number_of_seats=request.POST.get('number_of_seats'),
                              trip_date=request.POST.get('trip_date')
                              )             
        '''
        data = json.loads(request.body)
        #data = ast.literal_eval(request.body.decode())
        trip = CarTrip.create(driver_name=data['driver_name'],
                              destination=data['destination'],
                              number_of_seats=data['number_of_seats'],
                              trip_date=data['trip_date']
                              )
        trip.save()
        return JsonResponse({'token': data['driver_name']})
    else:
        return JsonResponse({'message': f'Method Not Allowed ({request.method})'}, status=405)


@csrf_exempt
def register(request):
    """
    POST request sample
    {
        "hiker_name
    }
    """
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data['hiker_name']
        number = data['trip_number']
        print(name , number)
        relation = Relation.create(trip_number=number,
                                   hiker_name=name,)
        relation.save()
        return JsonResponse({'token': 'done'})
    else:
        return JsonResponse({'message': f'Method Not Allowed ({request.method})'}, status=405)


@csrf_exempt
def mytrips (request):
    """
    POST request sample
    {
      "driver_name": "kamil"
    }
    """
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data['driver_name']
        context = []
        for person in Relation.objects.filter(hiker_name=name) :
            for t in CarTrip.objects.filter(id=person.trip_number) :

                t.trip_date = t.trip_date.replace('T', ' ')
                size = len(t.trip_date)
                t.trip_date = t.trip_date[:size-8]
                obj = Profile.objects.get(username=t.driver_name)
                phone_number = obj.mobile_number
                seats = t.number_of_seats
                for rel in Relation.objects.all():
                    print(rel.trip_number)
                    if rel.trip_number == t.id:
                        seats -= 1
                context.append({'driver_name': t.driver_name,
                                'mobile_number': str(phone_number),
                                'id': t.id , 'destination': t.destination, 'trip_date': t.trip_date,
                                'number_of_seats': seats, 'pub_date': t.pub_date})
        return JsonResponse({'token': context})
    else:
        return JsonResponse({'message': f'Method Not Allowed ({request.method})'}, status=405)

def index(request):
    """
    GET request
    """
    if request.method == 'GET':
        context = []
        for t in CarTrip.objects.all() :
            t.trip_date = t.trip_date.replace('T', ' ')
            size = len(t.trip_date)
            t.trip_date = t.trip_date[:size-8]

            seats = t.number_of_seats
            for rel in Relation.objects.all():
                print(rel.trip_number)
                if rel.trip_number == t.id :
                    seats -= 1

            context.append({'driver_name': t.driver_name, 'id': t.id,
                            'destination': t.destination, 'trip_date': t.trip_date,
                            'number_of_seats': seats, 'pub_date': t.pub_date})
        return JsonResponse({'token': context})
    else:
        return JsonResponse({'message': f'Method Not Allowed ({request.method})'}, status=405)



#
# def detail(request, cartrip_id):
#
#     cartrip = get_object_or_404(CarTrip, pk=cartrip_id)
#
#     return render(request, 'polls/detail.html', {'cartrip': cartrip})
