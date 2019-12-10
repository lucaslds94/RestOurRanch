from django import forms
from website.models import *

class Review_form(forms.ModelForm):
    class Meta:
        model = Review
        fields = [
            'rating',
            'usuario',
            'comment',           
        ]