//Problem
// https://www.hackerearth.com/problem/algorithm/seven-segment-display-nov-easy-e7f87ce0/?source=list_view


#include<bits/stdc++.h>

using namespace std;

int count_match(int digit){
	int ans = 0;
	switch(digit) {
		case 0: case 6: case 9:
			ans += 6;
			break;
		case 1:
			ans += 2;
			break;
		case 2: case 3: case 5:
			ans += 5;
			break;
		case 4:
			ans += 4;
			break;
		case 7:
			ans += 3;
			break;
		case 8:
			ans += 7;
			break;
		default:
			break;
	}
	return ans;
}
int main() {
	int t,total_matchstick=0;
	cin>>t;
	while(t--){
		int n;
		cin>>n;
		total_matchstick=0;
		if(n==0) {total_matchstick=6;}
		else{
		while(n>0){
			int digit = n % 10;
			total_matchstick += count_match(digit);
			n /= 10;
		}
		}
		if(total_matchstick%2 == 1){	
			cout<<7; 
			total_matchstick -= 3;
		}
		for(int i=0; i<total_matchstick/2; i++){ cout<<1;}

		
		cout<<"\n";
		}
	
	
}

