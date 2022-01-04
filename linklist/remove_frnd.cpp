//problem
//https://www.hackerearth.com/problem/algorithm/remove-friends-5/

#include <bits/stdc++.h>
using namespace std;

class Node{
	public:
		int data;
		Node* next;

		Node(int data){
			this->data = data;
			next = NULL;	
		}
};
Node* delete_frnd(Node* head, int k){
    if(k==0){   return head;}
}
void printlist(Node* head){
    Node* cur = head;
    while(cur){
        cout<<cur->data<<"->";
        cur= cur->next;
    }
    cout<<"\n";
}
int main() {
	long t;
	cin >> t;
	while(t--){
		int n,k;
		cin>>n>>k;
		Node* head = NULL;
        Node* cur = NULL;
		// Node* new_node = new Node();
		for(int i=0;i<n;i++){
			int data;
			cin>>data;
			Node* new_node = new Node(data);
			if(!head){
				head = new_node;
                cur = new_node;
			}else{
                cur->next = new_node;
				cur = new_node;
            }
		}
        head = delete_frnd(head,k);
        printlist(head);
	}
    return 0;
}
