from rest_framework import routers
from .api import InstitutionViewSet
from django.urls import path

inst_update = InstitutionViewSet.as_view({
    'post': 'update'
})

#router = routers.DefaultRouter()
#router.register('api/institutions', InstitutionViewSet, 'institutions')
urlpatterns = [
    path('institutions/', InstitutionViewSet.as_view({'get': 'list', 'post': 'create'}), name='institutions'), 
    path('institutions/<int:pk>/addHelper', inst_update,  name='inst_update')]

    