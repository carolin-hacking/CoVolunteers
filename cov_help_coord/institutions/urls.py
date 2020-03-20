from rest_framework import routers
from .api import InstitutionViewSet

router = routers.DefaultRouter()
router.register('api/institutions', InstitutionViewSet, 'institutions')

urlpatterns = router.urls