from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import ArticleListSerializer, ArticleSerializer
from .models import Article

@api_view(['GET'])
def article_list(request):
    articles = Article.objects.all()
    serializer = ArticleListSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def article_detail(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    serializer = ArticleSerializer(article)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])  # 인증된 사용자인지 검증
def create_article(request):
    serializer = ArticleSerializer(data=request.data)  # request.POST는 form data만 잡을 수 있지만 data는 JSON도 잡을 수 있다.
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)  # NOT NULL CONSTRAINT FAILED
        return Response(serializer.data)
