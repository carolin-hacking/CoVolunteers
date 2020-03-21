from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Helper(models.Model):
    name = models.CharField(max_length=100, null=True)
    phonenumber = models.CharField(max_length=100, null=True)
    zipcode = models.CharField(max_length=5, null=True)
    email = models.CharField(max_length=100, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)

@receiver(post_save, sender=User)
def create_user_helper(sender, instance, created, **kwargs):
    if created:
        Helper.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_helper(sender, instance, **kwargs):
    instance.helper.save()