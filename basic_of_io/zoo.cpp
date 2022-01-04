// Problem
//https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/is-zoo-f6f309e7/
  
  
    #include <iostream>
     
    using namespace std;
     
    int main() {
    	string s;
    	cin>>s;
    	int zc=0,oc=0;
    	for(int i=0;i<s.size();i++){
    		if(s[i]=='z')	zc++;
    		else oc++;
    	} 
    	if((zc*2) == oc)	cout<<"Yes";
    	else cout<<"No";
    }
