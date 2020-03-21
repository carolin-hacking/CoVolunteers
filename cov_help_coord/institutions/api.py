from institutions.models import Institution
from rest_framework import viewsets, permissions
from .serializers import InstitutionSerializer
from helpers.models import Helper
from rest_framework.response import Response
from rest_framework.decorators import action
# Institution Viewset

class InstitutionViewSet(viewsets.ModelViewSet):

    serializer_class = InstitutionSerializer
    queryset = Institution.objects.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def update(self, request, pk):
        
        helperid = request.user.helper.id
        print(helperid)
        self.get_object().helpers.add(helperid)
        serializer = self.serializer_class(self.get_object())
        return Response(serializer.data)
    