function checkSpam(str) {
  //to be independent from case, function uses RegExp pattern with i flag
  if (/1xBet/i.test(str) || /XXX/i.test(str)) {
    return true;
  } else return false;
}
