 // Problem
 //https://www.hackerearth.com/problem/algorithm/roy-and-profile-picture/?source=list_view
     #include <bits/stdc++.h>
     
    using namespace std;
     
    int main() {
    	int l,n;
    	cin>>l;
    	cin>>n;
    	int photo[n][2];
    	for(int i=0;i<n;i++){
    		cin>>photo[i][0];
    		cin>>photo[i][1];
     
    		if(photo[i][0]<l || photo[i][1]<l){ cout<<"UPLOAD ANOTHER\n";}
    		else if (photo[i][0]==photo[i][1]){ cout<<"ACCEPTED\n";}
    		else { cout<<"CROP IT\n";}
    	}
    	
    }
