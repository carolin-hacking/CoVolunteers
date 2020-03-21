from rest_framework import routers
from .api import HelperViewSet

router = routers.DefaultRouter()
router.register('api/helpers', HelperViewSet, 'helpers')

urlpatterns = router.urls