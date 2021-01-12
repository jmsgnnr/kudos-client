
curl "https://frozen-shore-45480.herokuapp.com/sign-out" \
  --include \
  --request DELETE\
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
 
 
echo