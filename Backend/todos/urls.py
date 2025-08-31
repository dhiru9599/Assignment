from django.urls import path
from .views import TodoListCreateView, TodoRetrieveUpdateDestroyView, HealthCheckView

urlpatterns = [
    path('', TodoListCreateView.as_view(), name='todo-list-create'),
    path('health/', HealthCheckView.as_view(), name='health-check'),
    path('<int:pk>/', TodoRetrieveUpdateDestroyView.as_view(), name='todo-retrieve-update-destroy'),
]