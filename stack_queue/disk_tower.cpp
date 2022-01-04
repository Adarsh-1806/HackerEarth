//problem
//https://www.hackerearth.com/practice/data-structures/queues/basics-of-queues/practice-problems/algorithm/disk-tower-b7cc7a50/


#include <bits/stdc++.h>

using namespace std;

int main() {
	int num;
	cin >> num;
	int disk[num];
	for(int i=0;i<num;i++)
		cin>>disk[i];
	priority_queue<int> pq;
	int mx = num;
	for(int i=0;i<num;i++){
		pq.push(disk[i]);
		while(pq.top()==mx){
			cout<<pq.top()<<" ";
			mx--;
			pq.pop();
		}
		cout<<"\n";
	}

}

