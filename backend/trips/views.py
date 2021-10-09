from django.http import HttpResponse, Http404, JsonResponse
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.views import generic
from django.views.decorators.csrf import csrf_exempt


from .forms import CarTripCreationForm
from .models import CarTrip

from .forms import CarTripCreationForm , RelationCreationForm
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
        data = ast.literal_eval(request.body.decode())
        trip = CarTrip.create(driver_name=data['driver_name'],
                              destination=data['destination'],
                              number_of_seats=data['number_of_seats'],
                              trip_date=data['trip_date']
                              )
        trip.save()

        return JsonResponse({'token': data['driver_name'] })
    else :
        form = CarTripCreationForm()
    return render(request , 'trips/create.html' , {'form':form})


@csrf_exempt
def register(request):
    if request.method == 'POST':
         name = request.POST.get('hiker_name')
         number = request.POST.get('trip_number')
         relation = Relation.create(trip_number=number,
                                   hiker_name=name,)
         relation.save()
         print(name , number )

         return JsonResponse({'token': 'done' })
    else :
        form = RelationCreationForm( )
        return render(request, 'user/login.html', {'form' : form})

def index(request):
    latest_cartrip_list = CarTrip.objects.order_by('-pub_date')
    context = [ ]
    for t in CarTrip.objects.all() :
        t.trip_date = t.trip_date.replace('T',' ')
        size = len(t.trip_date)
        t.trip_date = t.trip_date[:size-8]
        hikers = []
        for person in Relation.objects.filter( trip_number = t.id) :
            hikers.append(person.hiker_name)
        context.append({'driver_name': t.driver_name, 'id': t.id , 'destination': t.destination, 'trip_date': t.trip_date
                    , 'number_of_seats':t.number_of_seats, 'pub_date':t.pub_date , 'hikers':hikers} )
    return JsonResponse({'token': context })



#
# def detail(request, cartrip_id):
#
#     cartrip = get_object_or_404(CarTrip, pk=cartrip_id)
#
#     return render(request, 'polls/detail.html', {'cartrip': cartrip})
