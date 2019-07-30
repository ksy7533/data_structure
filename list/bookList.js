function initBookList() {
  /* book list data */
  const bookListData = [
    '왜 아이에게 그런말을 했을까',
    '유럽 도시 기행',
    '소설가 김영하의 여행의 이유',
    '이보다 쉽고 재밌는 삼국지는 없다',
    '공부 머리 독서법',
    '생각의 함정에서 생각의 무기를 찾아내는 지혜',
  ];

  /* list 아이템 출력하기 */
  function displayList(list) {
    for(list.front(); list.currentPos() < list.length(); list.next()) {
      if(list.currentItem() instanceof Member) {
        console.log('예약자: ',  list.currentItem().name, ' 빌린책: ', list.currentItem().book);
      } else {
        console.log(list.currentItem());
      }
    }
  }

  function Member(name, book) {
    this.name = name;
    this.book = book; 
  }

  function borrowBook(bookName, bookList, memberName, memberList) {
    if(!bookList.contains(bookName)) {
      console.log(bookName, ' 책이 없습니다');
      return;
    };

    bookList.removeItem(bookName);
    borrowedBookList.appendItem(bookName);
    const member = new Member(memberName, bookName);
    memberList.appendItem(member);

    console.log('대여된 책목록-----');
    displayList(borrowedBookList);
    console.log('------------------');
  };

  function returnBook(bookName, bookList, memberName, memberList, borrowedBookList) {
    const memberListData = memberList.toString();
    const findIndexNumber = memberListData.findIndex(item => item.book === bookName);
    memberListData.splice(findIndexNumber, 1);
    memberList.listSize--;
    borrowedBookList.removeItem(bookName);
    bookList.appendItem(bookName);
  }

  const bookList = new List();
  const borrowedBookList = new List();

  /* book list 추가하기 */
  bookListData.forEach(item => {
    bookList.appendItem(item);
  });

  const memberList = new List();

  displayList(bookList);
  borrowBook('유럽 도시 기행', bookList, '사나', memberList);
  borrowBook('공부 머리 독서법', bookList, '미나', memberList);
  borrowBook('유럽 도시 기행', bookList, '모모', memberList);
  displayList(memberList);
  returnBook('유럽 도시 기행', bookList, '사나', memberList, borrowedBookList);
  displayList(memberList);
};