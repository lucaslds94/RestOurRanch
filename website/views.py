from django.shortcuts import render
from website.models import *

# Create your views here.
def home(request):
    return render(request,'home.html')

def cadastro(request):
    return render(request,'cadastro.html')

def restaurantes(request):

    lista_restaurantes = Restaurante.objects.all()
    context = {
        'restaurantes': lista_restaurantes
    }

    return render(request, 'restaurantes.html', context)

def reviews(request):
    review_list = Restaurante.objects.all()
