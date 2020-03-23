from rest_framework import routers
from .api import HelperViewSet
from django.urls import path

helper_update = HelperViewSet.as_view({
    'post': 'update'
})

urlpatterns = [
    path('helpers/', HelperViewSet.as_view({'get': 'list', 'post': 'create', 'delete': 'destroy'}), name='helpers'), 
    path('helpers/update/', helper_update,  name='helper_update')
    ]

