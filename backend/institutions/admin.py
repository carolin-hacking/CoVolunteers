from django.contrib import admin
from institutions.models import Institution

# Register your models here.
class InstitutionAdmin(admin.ModelAdmin):
    pass
admin.site.register(Institution, InstitutionAdmin)