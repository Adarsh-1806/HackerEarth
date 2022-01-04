 // Problem
// https://www.hackerearth.com/problem/algorithm/count-divisors/?source=list_view
    
   
    #include <iostream>
     
    using namespace std;
     
    int main() {
    	int l,r,k,cnt=0;
    	cin>>l;
    	cin>>r;
    	cin>>k;
    	for(int i=l;i<=r;i++){
    		if( i%k == 0){cnt++;}
    	}
    	cout<<cnt;
    }
