const html = "w7zpfs0{%=pwa-deny-1%}1tee12{%=pwa-deny%}c22{%=pwa_confirm-18-bg-color%}otnhb{%=pwa-confirm-6%}iq9hss{%=pwa-confirm-8%}si9a7b{%=ipp-deny-text-color-5%}1wj{%=wp-deny-1%}ci0{%=ipp-confirm-10-text-color%}oakg7w{%=pwa-confirm-16-text-color%}xizh{%=pwa-deny-text-color-1%}hahv{%=pwa-confirm-5-bg-color%}wpnst3q{%=ipp-confirm-text-color%}9r85{%=wp-confirm-7-bg-color%}jwk{%=wp-confirm-9-bg-color%}00x{%=pwa-confirm-20-text-color%}gcmo{%=pwa-deny-text-color-4%}loss{%=ipp-confirm-8%}1kvo{%=text-title%}b8hz0{%=pwa-confirm-11%}gskku9{%=wp-confirm-15%}26sxa1c{%=wp-deny-bg-color-3%}wkfete{%=ipp-confirm-13%}4d78{%=ipp-deny-text-color%}dbr3{%=pwa-deny-5%}13ie7np{%=wp-confirm-20%}zhh8d3x{%=wp-confirm-2-text-color%}sd4bl48{%=pwa-confirm-2%}9zxvf{%=pwa-confirm-15-bg-color%}5lu9en4{%=pwa-deny-4%}0sx0199{%=pwa-confirm-12-bg-color%}0idd26{%=ipp-confirm-16-text-color%}18nn0vc{%=ipp-confirm-20-text-color%}h3adn1y{%=ipp-confirm-17%}142i{%=wp-confirm-6-bg-color%}vrclad{%=pwa-deny-2%}of95{%=pwa-confirm-1-bg-color%}d5dle{%=wp-confirm-12-bg-color%}lifx20i{%=text-body%}hss{%=wp-confirm-3-bg-color%}ikkhkwe{%=pwa-confirm-19-bg-color%}g79cx{%=pwa-confirm-10-bg-color%}cgj{%=pwa-confirm-17-text-color%}416{%=wp-confirm-2-bg-color%}ycmk{%=wp-confirm-5-bg-color%}4mg{%=pwa-confirm-6-text-color%}6pe{%=pwa-confirm-4%}"

function getMatches(source, matcher) {
  const match = source.matchAll(matcher);
  const result = [];
  for (let item;;) {
    item = match.next();
    if(item.done) break;
    result.push(item.value[1]);
  }
  return result;
}


// console.log(getMatches(html, /{%=([\w-_]*)%}/gm))

const arr = [7, 2, 5, 6, 7, 2, 3, 5, 6, 7, 9, 2, 4, 6];


const exampleResult = {
  1: 1,
  2: 3,
  5: 2,
  6: 3,
  7: 2,
  3: 1,
  9: 1,
  4: 1,
};


const result = {};

for (let i = 0; i < arr.length; i++) {
  if (result[arr[i]]) {
    result[arr[i]] = result[arr[i]] + 1;
  }
  else {
    result[arr[i]] = 1;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (result[arr[i]]) {
    result[arr[i]] = result[arr[i]] + 1;
  }
  else {
    result[arr[i]] = 1;
  }
}
