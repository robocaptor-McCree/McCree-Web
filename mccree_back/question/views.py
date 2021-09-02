from django.shortcuts import render
from rest_framework import viewsets,status
from .serializers import *
from rest_framework.response import Response
from .models import * 


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


