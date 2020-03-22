from helpers.models import Helper
from rest_framework import viewsets, permissions
from .serializers import HelperSerializer
from rest_framework.response import Response

# Helper Viewset

class HelperViewSet(viewsets.ModelViewSet):
    #permission_classes = [
    #    permissions.IsAuthenticated
    #]

    serializer_class = HelperSerializer
    #queryset = Helper.objects.all()
    def get_queryset(self):
        institutions = self.request.user.institutions.all()
        helpers = Helper.objects.none()
        for i in institutions:
            print(i)
            helpers |= i.helpers.all()
            print(helpers)
        return helpers

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def update(self, request):
        helper = self.request.user.helper
        print(helper)
        helper.email = request.user.email
        helper.save(update_fields=["email"])

        if request.data['name']:
            helper.name = request.data['name']
            helper.save(update_fields=["name"])
        if request.data['phonenumber']:
            helper.phonenumber = request.data['phonenumber']
            helper.save(update_fields=["phonenumber"])
        if request.data['zipcode']:
            helper.zipcode = request.data['zipcode']
            helper.save(update_fields=["zipcode"])
        serializer = self.serializer_class(helper)
        return Response(serializer.data)