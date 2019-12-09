from django.shortcuts import render
from website.models import *

# Create your views here.
def home(request):
    return render(request,'home.html')

def cadastro(request):
    return render(request,'cadastro.html')

def restaurantes(request):
    return render(request, 'restaurantes.html')