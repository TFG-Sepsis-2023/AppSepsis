from django.db import models

# Create your models here.

class Metodos(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nombre')


    class Meta:
        verbose_name = "METODOS"
        verbose_name_plural = "METODOS"

    def __str__(self):
        return self