from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('helpers.urls')),
    path('', include('accounts.urls')),
    path('', include('institutions.urls')),
    path('admin/', admin.site.urls),
]
