from institutions.models import Institution
from rest_framework import viewsets, permissions
from .serializers import InstitutionSerializer
from helpers.models import Helper
from django.http import HttpResponse
from rest_framework.decorators import action
# Institution Viewset

class InstitutionViewSet(viewsets.ModelViewSet):

    serializer_class = InstitutionSerializer
    queryset = Institution.objects.all()

    # the company user owns this company 'inserat'
    #def perform_create(self, serializer):
     #   serializer.save(owner=self.request.user)

    def update(self, request, pk):
        print(request.data)
        helper_pk = request.data['email']
        self.get_object().helpers.add(helper_pk)
        return HttpResponse("<html><h1>Hello</h1></html>")

    