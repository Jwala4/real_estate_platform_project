from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Property
from .serializers import PropertySerializer

class PropertyList(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    permission_classes = [AllowAny]

    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return PropertySerializer(*args, **kwargs)
