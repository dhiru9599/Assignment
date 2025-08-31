from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from .models import Todo
from .serializers import TodoSerializer

class TodoListCreateView(ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

@method_decorator(csrf_exempt, name='dispatch')
class HealthCheckView(APIView):
    def get(self, request):
        return Response({
            "status": "healthy",
            "message": "Todo API is working",
            "endpoints": {
                "list_todos": "/api/todos/",
                "create_todo": "POST /api/todos/",
                "get_todo": "/api/todos/{id}/",
                "update_todo": "PUT /api/todos/{id}/",
                "delete_todo": "DELETE /api/todos/{id}/"
            }
        })