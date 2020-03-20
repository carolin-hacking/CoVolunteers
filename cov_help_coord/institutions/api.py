from institutions.models import Institution
from rest_framework import viewsets, permissions
from .serializers import InstitutionSerializer

# Institution Viewset

class InstitutionViewSet(viewsets.ModelViewSet):

    serializer_class = InstitutionSerializer
    queryset = Institution.objects.all()

    # the company user owns this company 'inserat'
    #def perform_create(self, serializer):
     #   serializer.save(owner=self.request.user)