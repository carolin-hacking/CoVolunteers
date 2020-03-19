from rest_framework import serializers
from helpers.models import Helper

class HelperSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Helper
        fields = '__all__'