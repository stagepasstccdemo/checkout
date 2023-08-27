# # Download jq
# curl -L https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 -o ./jq 

# # Make jq executable
# chmod a+x ./jq 

# # Get version from package.json
# VERSION=$(node --eval="process.stdout.write(require('./package.json').version)")

# # Get the current import-map.json
# aws s3 cp s3://INSERT_YOUR_BUCKET_HERE/config/import-map.json import-map.json

# # Update the import-map.json
# NEW_URL=/config/mfe/app-name/$VERSION/your-app-name.js

# # Update the import-map.json
# test -s ./import-map.json && cat ./import-map.json | ./jq --arg NEW_URL "$NEW_URL" '.imports["@orgName/app-name"] = $NEW_URL' > new.importmap.json || echo '{"imports": {"@orgName/app-name": "'"$NEW_URL"'"}}' > new.importmap.json

# # Upload the new import-map.json
# aws s3 cp dist s3://INSERT_YOUR_BUCKET_HERE/config/mfe/app-name/$VERSION --recursive
# aws s3 cp new.importmap.json s3://INSERT_YOUR_BUCKET_HERE/config/import-map.json
# aws cloudfront create-invalidation --distribution-id CLOUDFRONT-DIST-ID --paths '/config/import-map.json'
