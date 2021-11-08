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
        question_list.append(Question.objects.get(id=q_id).answer)
        while(len(question_list)<4):
            index = random.randrange(0,question.count())
            if question[index].id != q_id and (question[index].answer not in question_list):
                question_list.append(question[index].answer)
        random.shuffle(question_list)
        return Response({
            'question1': question_list[0],
            'question2': question_list[1],
            'question3': question_list[2],
            'question4': question_list[3],
        }, status=200)


    @action(detail=False, methods=['GET'])
    def getAnswer(self, request, *arg, **kwargs):

        question_id = request.GET['id']
        user_answer = request.GET['user_answer']

        print("id ", question_id)
        print("고른 답 ", user_answer)

        answers = str(Question.objects.get(id=question_id))
        print("답 ", answers)
        if(str(user_answer) == str(answers)):
            return Response({"정답"}, status=200)
        else:
            return Response({"오답"}, status=401)


