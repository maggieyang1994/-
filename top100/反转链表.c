ListNode* reverseList(ListNode* head) {
        if(!head){
            return nullptr;
        }
        return reverse(head, head, head->next);        
    }
    
    ListNode* reverse(ListNode* head, ListNode* first, ListNode* target){
        if(!target){
            return head;
        }
        first->next = target->next;
        ListNode* temp = target->next;
        target->next = head;
        return reverse(target, first, temp);
    }
