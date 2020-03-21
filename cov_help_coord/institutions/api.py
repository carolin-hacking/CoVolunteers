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
    # the company user owns this company 'inserat'
    #def perform_create(self, serializer):
     #   serializer.save(owner=self.request.user)

    def update(self, request, pk):
        helper = self.request.user.helper
        helper_email = request.data['email']
        helper = Helper.objects.filter(email=helper_email)
        self.get_object().helpers.add(helper[0].id)
        serializer = self.serializer_class(self.get_object())
        return Response(serializer.data)
    