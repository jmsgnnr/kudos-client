
curl "http://localhost:4741/" \
  --include \
  --request DELETE\
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
 
 
echo