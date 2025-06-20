from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny

from .models import Property
from .serializers import PropertySerializer

class PropertyList(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [AllowAny]

    def get_serializer_context(self):
        return {'request': self.request}  # ✅ Important for absolute image URLs


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [AllowAny]

    def get_serializer_context(self):
        return {'request': self.request}  # ✅ Important for absolute image URLs
