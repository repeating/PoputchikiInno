from django.http import HttpResponse, Http404
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.views import generic

from .models import CarTrip



class IndexView(generic.ListView):
    template_name = 'trips/index.html'
    context_object_name = 'latest_cartrip_list'

    def get_queryset(self):
        return CarTrip.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = CarTrip
    template_name = 'trips/detail.html'


def index(request):
    latest_cartrip_list = CarTrip.objects.order_by('-pub_date')[:5]
    context = {'latest_cartrip_list': latest_cartrip_list}
    return render(request, 'trips/index.html', context)


def detail(request, cartrip_id):
    cartrip = get_object_or_404(CarTrip, pk=cartrip_id)
    return render(request, 'polls/detail.html', {'cartrip': cartrip})
