from django.db import models
import numpy as np

# Create your models here.

# class InfoUsuario (models.Model):
#     usuario = models.CharField(max_length = 100)
#     email = models.EmailField(max_length = 100)
#     senha = models.CharField(max_length = 100)

#     def __str__(self):
#         return self.usuario

class Restaurante(models.Model):
    nome = models.CharField(max_length=200)
    
    def average_rating(self):
        all_ratings = map(lambda x: x.rating, self.review_set.all())
        return np.mean(all_ratings)
        
    def __unicode__(self):
        return self.nome


class Review(models.Model):
    RATING_CHOICES = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    )
    restaurantes = models.ForeignKey(Restaurante, on_delete=models.CASCADE)
    pub_date = models.DateTimeField('data publicada')
    usuario = models.CharField(max_length=100)
    comment = models.CharField(max_length=200)
    rating = models.IntegerField(choices=RATING_CHOICES)