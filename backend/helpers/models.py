from django.db import models
from django.contrib.auth.models import User

class Helper(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    zipcode = models.CharField(max_length=5)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="helpers", on_delete=models.CASCADE, null=True)