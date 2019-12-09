from django.contrib import admin
from website.models import Restaurante, Review

# Register your models here.

class ReviewAdmin(admin.ModelAdmin):
    model = Review
    list_display = ('restaurantes', 'rating', 'usuario', 'comment', 'pub_date')
    list_filter = ['pub_date', 'usuario']
    search_fields = ['comment']
    
admin.site.register(Restaurante)
admin.site.register(Review, ReviewAdmin)