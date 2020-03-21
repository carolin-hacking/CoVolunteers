from django.db import models
from django.contrib.auth.models import User
from helpers.models import Helper

class Institution(models.Model):
    SUPERMARKET = 'SUP'
    HOSPITAL = 'HOS'
    FARMER = 'FAR'
    CARE = 'CAR'
    COMPANY_TYPE_CHOICES = [
        (SUPERMARKET, 'Supermarkt'),
        (HOSPITAL, 'Krankenhaus'),
        (FARMER, 'Landwirt'),
        (CARE, 'Pflege')
    ]
    companyname = models.CharField(max_length=100)
    ansprechpartner = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=100)
    companytype = models.CharField(max_length=3, choices=COMPANY_TYPE_CHOICES, default=SUPERMARKET)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="companies", on_delete=models.CASCADE, null=True)
    helpers = models.ManyToManyField(Helper, null=True)