//Problem
//https://www.hackerearth.com/problem/algorithm/cartag-948c2b02/?source=list_view

#include<bits/stdc++.h>

using namespace std;

int main()

{
    string s;
    cin>>s;
    bool flag=true;
    for(int i=0;i<s.length()-1;i++)
    {
        if(i==0|| i==3||i==4||i==7)
        {
			if((s[i]-'0'+ s[i+1]-'0')%2!=0)
			{
                flag=false;
                break;
            }
        }else if(i==2)
        {
            if(s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U'||s[i]=='Y')
            {
                flag=false;
                break;
            }
        }
    }
    if(flag)	cout<<"valid";
	else	cout<<"invalid";
}
