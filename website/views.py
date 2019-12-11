from django.shortcuts import render
from website.models import *
from .forms import Review_form
import datetime

# Create your views here.
def home(request):
    return render(request,'home.html')

def cadastro(request):
    return render(request,'cadastro.html')

def restaurantes(request, categoriaEntry=""):
    review_form = Review_form(request.POST or None)
    if review_form.is_valid():
       review_form.save()
       return render(request,'home.html')

    if categoriaEntry:
        lista_restaurantes = Restaurante.objects.filter(categoria=categoriaEntry)
        context = {
            'restaurantes': lista_restaurantes,
            'review_form': review_form
        }
        return render(request, 'restaurantes.html', context)
    lista_restaurantes = Restaurante.objects.all()
    context = {
        'restaurantes': lista_restaurantes,
        'review_form': review_form,
    }

    return render(request, 'restaurantes.html', context)

def reviews(request):
    review_list = Restaurante.objects.all()
