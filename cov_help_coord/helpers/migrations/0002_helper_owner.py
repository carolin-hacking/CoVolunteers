# Generated by Django 3.0.4 on 2020-03-19 14:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('helpers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='helper',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='helpers', to=settings.AUTH_USER_MODEL),
        ),
    ]
