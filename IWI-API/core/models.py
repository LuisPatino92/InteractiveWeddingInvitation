from django.db import models


class Guest(models.Model):

    id = models.SmallAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    cellphone = models.CharField(max_length=100)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Companion(models.Model):

    id = models.SmallAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    confirmed = models.BooleanField(default=False)
    guest = models.ForeignKey("Guest", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
