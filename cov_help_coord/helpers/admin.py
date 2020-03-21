from django.contrib import admin
from helpers.models import Helper

# Register your models here.
class HelperAdmin(admin.ModelAdmin):
    pass
admin.site.register(Helper, HelperAdmin)