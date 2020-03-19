from helpers.models import Helper
from rest_framework import viewsets, permissions
from .serializers import HelperSerializer

# Helper Viewset

class HelperViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = HelperSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)