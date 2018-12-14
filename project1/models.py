from django.db import models

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    image = models.TextField()
    rating = models.IntegerField()
    website = models.TextField()

    def __str__(self):
        return self.name