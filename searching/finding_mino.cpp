// Problem
//https://www.hackerearth.com/practice/algorithms/searching/ternary-search/practice-problems/algorithm/solve-with-ternary-search/?utm_source=header&utm_medium=search&utm_campaign=he-search

    #include <bits/stdc++.h>
    using namespace std;
     
    double func(int x)
    { 
    return 2*x*x - 12*x +7; 
    }
     
    int main() {
    	long t;
    	cin >> t;
    	while(t--){
    		long l,r;
    		long ans ;
    		cin>>l>>r;
    		while(l<=r){
    			long m1 = l + (r-l)/3;
    			long m2 = r -  (r-l)/3;
    			double f1 = func(m1);
    			double f2 = func(m2);
    			if(f1 < f2){
    				ans = m1;
    				r = m2 -1;
    			}
    			else {
    				l = m1+1;
    				ans = m2;
    			}
    		}
    		cout<<func(ans)<<"\n";
    	}
    }

