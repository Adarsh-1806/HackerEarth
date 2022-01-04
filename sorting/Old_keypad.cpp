//Problem 
// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/practice-problems/algorithm/old-keypad-in-a-foreign-land-24/

#include <bits/stdc++.h>
using namespace std;

int main() {
	//inputs
	int n;
	cin>>n;
	vector<int> freq(n);
	for(int i=0;i<n;i++)
		cin>>freq[i];
	int k;
	cin>>k;
	vector<int> keysize(k);
	int total=0;
	for(int i=0;i<k;i++){
		cin>>keysize[i];
		total+=keysize[i];
	}
	if(total < n) cout<<-1;
	else{
		//sort in reverse order
		sort(freq.rbegin(),freq.rend());
		sort(keysize.rbegin(),keysize.rend());
		int mul = 1,i=0;
		int ans = 0;
		while(i<n){
			for(int j=0;j<k;j++){
				if(i == n) break;
				else if(keysize[j] == 0) break;
				ans += freq[i]*mul;
				i++;
				keysize[j]--;
			}
			mul++;
			if(i==n) break;
		}
		cout<<ans;
	}
}

