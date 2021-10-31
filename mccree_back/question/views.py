from django.shortcuts import render
from rest_framework import viewsets,status
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from .models import * 
import random


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @action(detail=False, methods=['GET'])
    def getQuestion(self, request, *arg, **kwargs):
        q_id = int(request.GET['q_id'])
        question = self.get_queryset()
        #print(question.count())
        #print(question[q_id].answer)
        question_list = []
        question_list.append(question[q_id].answer)
        while(len(question_list)<4):
            index = random.randrange(1,question.count())
            if index != q_id and (question[index].answer not in question_list):
                question_list.append(question[index].answer)
        random.shuffle(question_list)
        #print(question_list)
        return Response({
            'question1': question_list[0],
            'question2': question_list[1],
            'question3': question_list[2],
            'question4': question_list[3],
        }, status=status.HTTP_200_OK)


    @action(detail=False, methods=['GET'])
    def getAnswer(self, request, *arg, **kwargs):
        user_answer = request.GET['id']
        user_answer = request.GET['user_answer']
        answers = str(Question.objects.get(id=1))
        print(str(answers))
        print(user_answer)
        if(user_answer == answers):
            return Response({"정답"}, status=status.HTTP_200_OK)
        else:
            return Response({"오답"}, status=status.HTTP_401_OK)


